import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import Loader from './components/Loader';
import { loadGrid, mapUsersByUserId } from './utils/ticketUtils';
import './App.css';

function TaskBoardApp() {
  const [tasks, setTasks] = useState([]);
  const [userMap, setUserMap] = useState({});
  const [boardLayout, setBoardLayout] = useState({});
  const [groupOption, setGroupOption] = useState("status");
  const [sortOption, setSortOption] = useState("priority");
  const [isLoading, setIsLoading] = useState(true);

  const API_ENDPOINT = "https://api.quicksell.co/v1/internal/frontend-assignment";

  const fetchSettings = useCallback(() => {
    setGroupOption(localStorage.getItem("groupOption") || "status");
    setSortOption(localStorage.getItem("sortOption") || "priority");
  }, []);

  const storeSettings = useCallback((settings) => {
    Object.entries(settings).forEach(([key, value]) => localStorage.setItem(key, value));
  }, []);

  const updateGrouping = useCallback((newGroupOption) => {
    setIsLoading(true);
    setGroupOption(newGroupOption);
    storeSettings({ groupOption: newGroupOption });
  }, [storeSettings]);

  const updateSorting = useCallback((newSortOption) => {
    setIsLoading(true);
    setSortOption(newSortOption);
    storeSettings({ sortOption: newSortOption });
  }, [storeSettings]);

  useEffect(() => {
    fetchSettings();

    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then(({ tickets, users }) => {
        setTasks(tickets);
        setUserMap(mapUsersByUserId(users));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [fetchSettings]);

  useEffect(() => {
    if (!tasks.length) return;
    setBoardLayout(loadGrid(tasks, groupOption, sortOption));
    setIsLoading(false);
  }, [tasks, groupOption, sortOption]);

  return (
    <div className="TaskBoardApp">
      <Header
        grouping={groupOption}
        setGrouping={updateGrouping}
        ordering={sortOption}
        setOrdering={updateSorting}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <Board data={boardLayout} groupBy={groupOption} userMap={userMap} />
      )}
    </div>
  );
}

export default TaskBoardApp;
