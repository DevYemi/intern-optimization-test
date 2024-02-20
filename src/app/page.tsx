
import { ChangeEvent, useEffect, useState } from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";


export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [cycleStaus, setcycleStatus] = useState({ isFirstRender: true })

  // Update InputField values
  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  // Create a dummy Data for the graph
  const createDummyData = (dataCount: number) => {
    const store = [];

    const getRandomFromRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    for (let i = 0; i < dataCount; i++) {
      const storeData = { uv: 100, pv: 0, amt: 0 };

      storeData.uv = getRandomFromRange(20, 50);
      storeData.pv = getRandomFromRange(20, 50);
      storeData.amt = getRandomFromRange(20, 50);

      store.push(storeData);
    }

    return store;
  }

  const customData = createDummyData(50);


  useEffect(() => {
    setcycleStatus({ isFirstRender: false })
  })


  return (
    <main style={{ width: "100%", height: "200px" }}>
      <input value={inputValue} onChange={handleInputOnChange} type="text" />


      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={customData}>
          <Tooltip />
          <Area
            type="bump"
            strokeWidth={2}
            dataKey="uv"
            stroke={"yellow"}
            fill={"red"}
          />
        </AreaChart>
      </ResponsiveContainer>
    </main>
  );
}
