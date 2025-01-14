import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../recoil_state";

const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
    allTodo
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
      <li>Todo not completed: {allTodo} {" "}</li>
    </ul>
  );
};

export default TodoListStats;
