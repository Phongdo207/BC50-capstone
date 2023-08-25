import React from 'react'
import { Tabs } from 'antd';

export default function TheaterMovieItem(props) {
    const { theater } = props;
    return (
        <Tabs tabPosition='left'>
            <Tabs.TabPane tab={< img src={theater.logo} style={{ width: "100px" }} key={theater.maHeThongRap}></img>}>

            </Tabs.TabPane>
        </Tabs>
    )
}
