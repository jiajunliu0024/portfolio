import * as React from "react";
import { Divider, Flex, Tag } from "antd";

export default function ExperienceDetail({ details }) {
  const colorString = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];
  const detailItem = details.map((detail) => (
    <Tag color={colorString[Math.floor(Math.random() * colorString.length)]}>
      {detail}
    </Tag>
  ));

  return (
    <div>
      <Divider orientation="left">Course</Divider>
      <Flex gap="10px 0" wrap="wrap">
        {detailItem}
      </Flex>
    </div>
  );
}
