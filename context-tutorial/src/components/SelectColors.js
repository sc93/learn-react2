import React from "react";
import { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const SelectColors = () => {
    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            <ColorConsumer>
                {({ actions }) => (
                    <div style={{ display: "flex" }}>
                        {colors.map((color) => (
                            <div
                                key={color}
                                style={{
                                    background: color,
                                    width: "64px",
                                    height: "64px",
                                    cursor: "pointer",
                                }}
                                onClick={() => actions.setColor(color)}
                                onContextMenu={(e) => {
                                    e.preventDefault();
                                    actions.setSubColor(color);
                                }}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>

            <hr />
        </div>
    );
};

export default SelectColors;
