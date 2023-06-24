
"use client";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import faker from 'faker'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false, // عدم نمایش لجند
        },
        title: {
            display: false, // عدم نمایش عنوان
        },
    },
    scales: {
        x: {
            display: false, // عدم نمایش محور افقی
        },
        y: {
            beginAtZero: true,
            max: 1000, // مقدار بیشترین مقدار محور عمودی
        },
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        },
    },
    maintainAspectRatio: false, // عدم حفظ نسبت ابعاد
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
    labels,
    datasets: [
        {
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            backgroundColor: "rgba(255, 255, 255, 255)", // رنگ میله‌ها
            barThickness: 7, // ضخامت میله‌ها
        },
    ],
};

export function CustomChart() {
    return <Bar options={options} data={data} />;
}

///////////////////////chart 2 start/////////////////

export const options2 = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: false,
            text: "Chart.js Line Chart",
        },
    },
    elements: {
        line: {
            tension: 0.4, // تغییر در شکل خط
            borderWidth: 3, // ضخامت خط
            borderJoinStyle: "round", // شکل اتصال خطوط
        },
    },
};

const labels2 = ["January", "February", "March", "April", "May", "June", "July"];

export const data2 = {
    labels,
    datasets: [
        {
            label: "",
            data: labels2.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: "rgb(30 58 138)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
            label: "",
            data: labels2.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: "rgb(162 28 175)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
    ],
};

export function CustomChartSales() {
    return <Line options={options2} data={data2} />;
}
