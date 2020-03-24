import React, { Component } from "react";
import { Card, Input, Button, Table } from "antd";
import "../screen.css";
import "antd/dist/antd.css";
import math from "mathjs";
import Plot from "react-plotly.js";

const InputStyle = {
    background: "#AAB7B8",
    color: "white",
    fontWeight: "bold",
    fontSize: "24px"
};
var dataInTable = [];
const columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",
        key: "iteration"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "Error",
        key: "error",
        dataIndex: "error"
    }
];
const xValues = math.range(-10, 10, 0.5).toArray();
var fx = " ";
class Onepoint extends Component {
    constructor() {
        super();
        this.state = {
            fx: "",
            x0: 0,
            showOutputCard: false,
            showGraph: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.onepoint = this.onepoint.bind(this);
    }
    onepoint(xold) {
        fx = this.state.fx;
        var xnew = 0;
        var epsilon = parseFloat(0.0);
        var n = 0;
        var data = [];
        data["x"] = [];
        data["error"] = [];

        do {
            xnew = this.func(xold);
            epsilon = this.error(xnew, xold);
            data["x"][n] = xnew.toFixed(8);
            data["error"][n] = Math.abs(epsilon).toFixed(8);
            n++;
            xold = xnew;
        } while (Math.abs(epsilon) > 0.000001);

        this.createTable(data["x"], data["error"]);
        this.setState({
            showOutputCard: true,
            showGraph: true
        });
    }
    func(X) {
        var expr = math.compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }
    error(xnew, xold) {
        return Math.abs((xnew - xold) / xnew);
    }
    createTable(x, error) {
        dataInTable = [];
        for (var i = 0; i < x.length; i++) {
            dataInTable.push({
                iteration: i + 1,
                x: x[i],
                error: error[i]
            });
        }
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <div style={{ background: "#FFFF", padding: "30px" }}>
                <h2 style={{ color: "black", fontWeight: "bold" }}>
                    One Point Iteration
        </h2>
                <div>
                    <Card
                        bordered={true}
                        style={{
                            width:"100%",
                            background: "#001529",
                            color: "#FFFFFFFF",
                            float: "left"
                        }}
                        onChange={this.handleChange}
                    >
                        <h2>f(x)</h2>
                        <Input size="large" name="fx" style={InputStyle}></Input>
                        <h2>
                            X<sub>0</sub>
                        </h2>
                        <Input size="large" name="x0" style={InputStyle}></Input>
                        <Button
                            id="submit_button"
                            onClick={() => this.onepoint(parseFloat(this.state.x0))}
                            style={{
                                background: "#4caf50",
                                color: "white",
                                fontSize: "20px"
                            }}
                        >
                            Submit
            </Button>
                    </Card>

                    {this.state.showGraph && (
                        <Card
                            title={"Output of Onepoint Iteration"}
                            bordered={true}
                            style={{
                                width: "100%",
                                height: "75vmin",
                                border: "#778899",
                                background: "#001529",
                                color: "#FFFFFFFF",
                                float: "left",
                                zIndex: "3"
                            }}
                        >
                            <Plot
                                data={[
                                    {
                                        x: math.range(-10, 10, 0.5).toArray(),
                                        y: xValues.map(function (x) {
                                            return math.compile(fx).eval({ x: x });
                                        }),
                                        type: "scatter",
                                        marker: { color: "red" }
                                    }
                                ]}
                                layout={{ title: "Onepoint Iteration Plot" }}
                                style={{ width: "100%" }}
                            />
                        </Card>
                    )}
                    {this.state.showOutputCard && (
                        <Card
                            bordered={true}
                            id="outputCard"
                            style={{
                                width: "100%",
                                background: "#778899",
                                color: "#FFFFFFFF",
                                float: "inline-start",
                                marginBlockStart: "2%",
                                zIndex: "2"
                            }}
                        >
                            <Table
                                columns={columns}
                                dataSource={dataInTable}
                                bodyStyle={{
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    color: "black"
                                }}
                            ></Table>
                        </Card>
                    )}
                </div>
            </div>
        );
    }
}
export default Onepoint;
