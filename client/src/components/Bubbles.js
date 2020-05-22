import React, { useState, useEffect } from "react";
import { Grid, Pack } from "@potion/layout";
import { Svg, Circle } from "@potion/element";

const Bubbles = ({ colors }) => {
  const [bubbleData, setBubbleData] = useState([]);

  useEffect(() => {
    const generateBubbleData = colors.map((_, i) => ({
      value: Math.floor(Math.random() * (colors.length * 2)) + 1,
      key: `${i + 1}`
    }));
    setBubbleData(generateBubbleData);
  }, [colors]);

  return (
    <div className="bubble-wrap">
      <p>bubbles</p>
      <Svg width={600} height={600}>
        <Grid
          data={ bubbleData }
          bands
          size={[600, 600]}
          nodeEnter={d => ({ ...d, x: 200, y: 200 })}
          animate
        >
        {nodes =>
          nodes
            .map(({ nodeWidth, nodeHeight, x, y, key }, i) => {
              if (i < colors.length) {
                return (
                  <Circle
                    key={key}
                    cx={x + nodeWidth / 2}
                    cy={y + nodeHeight / 2}
                    r={80}
                    fill={colors[i].code.hex}
                  />
                );
              }
              return null;
            })
            .filter(v => v)
        }
        </Grid>
      </Svg>
    </div>
  );
};

export default Bubbles;
