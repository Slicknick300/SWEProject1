import React from "react";
import TodoList from "./components/UserProfile/TodoList";
import thisWeek from "./components/UserProfile/thisWeek";
import achievementCheck from "./components/UserProfile/achievementCheck";
import badgeTracker from "./components/UserProfile/badgeTracker";

function App(){        
    return (
        <div>
            <h1> Task Management App</h1>
            <container>
                <row>
                    <col>
                        <img src = "C:\Users\owner\Pictures\Saved Pictures\822711_user_512x512.png"></img>
                        <p> Username </p>
                        <div>
                            <h3> Task To Do List</h3>
                            <ol>
                                <TodoList text='Task 1' />
                                <TodoList text='Task 2' />
                                <TodoList text='Task 3' />
                            </ol>
                            <br></br>
                            <h3> Task Completed this week</h3>
                            <h4> <thisWeek text = '0' /> </h4>
                        </div>
                    </col>
                    <col>
                        <div>
                            <h3 className = 'card'> Achievment List</h3>
                            <table>
                                <tr>
                                    <td> Complete your first task</td>
                                    <achievementCheck />
                                </tr>
                                <tr>
                                    <td> Complete all of your tasks in one week</td>
                                    <achievementCheck />
                                </tr>
                                <tr>
                                    <td> Don't skip any tasks in one week</td>
                                    <achievementCheck />
                                </tr>
                            </table>
                        </div>
                        <h3 className='card'>Badges</h3>
                        <h5>Achievement Badge</h5>
                        <badgeTracker />
                        <h5>Active Badge</h5>
                        <badgeTracker />
                        <h5>Follow Through Badge</h5>
                        <badgeTracker />
                        <h5>Refer a friend</h5>
                        <badgeTracker />
                    </col>
                </row>
            </container>
        </div>

    )
}

export default App;