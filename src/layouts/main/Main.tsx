import React from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import {useAppSelector} from "../../hooks/hooks";
import {PointType} from "../../store/reducers/charts-reducer";

const Main = () => {

    const data = useAppSelector(state => state.charts.volume_marginality_relation)
    const year = useAppSelector(state => state.charts.selected_year)

    const wSub = data && data[year].vds_wsub
    const sub = data && data[year].vds_sub

    const wSubTable = wSub?.map((point: PointType) => ([point.x, point.y]))
    const subTable = sub?.map((point: PointType) => ([point.x, point.y]))

    const options = {
        chart: {
            type: 'line',
            width: 1000,
            height: 600,
        },
        title: {
            text: 'chart',
        },
        xAxis: {
            title: {
                text: 'Переработанное нефтяное сырье накопленным итогом, тонн',
            },
        },
        yAxis: {
            title: {
                text: 'ВДС НПЗ, руб.тонну',
            },
        },
        series: [
            {
                name: 'C учетом субсидии',
                data: subTable,

            },
            {
                name: 'Без учета субсидии',
                data: wSubTable,
            },
        ],
    };

    return (
        <main>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </main>
    );
};

export default Main;