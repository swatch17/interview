import React from "react";
const TwoSum = () => {
  const twoSum = (nums = [], target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
        console.log(map.get(complement));
        return [map.get(complement), i];
      } else {
        map.set(nums[i], i);
      }
    }
    return [];
  };
  let nums = [2, 7, 11, 15];
  let target = 9;
  console.log(twoSum(nums, target));
  return (
    <div>
      <h3>兩數之和</h3>
      <div>
        <p>輸入 nums = [2,7,11,15],target = 9</p>
        <p>輸出 [0,1]</p>
        {/* {twoSum}  */}
      </div>
    </div>
  );
};

export default TwoSum;
