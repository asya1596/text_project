<template>
    <div class="chart">
        <apexchart
            width="100%"
            height="260"
            :type="type"
            :options="chartOptions"
            :series="chartSeries"
        />
    </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
    components: {
        apexchart: VueApexCharts,
    },

    props: {
        type: {
            type: String,
            default: 'line',
        },
    },

    computed: {
        chartSeries() {
            if (this.type === 'radialBar') {
                return [72];
            }

            return [
                {
                    name: 'Значение',
                    data: [30, 40, 45, 50, 49, 60, 70, 91],
                },
            ];
        },

        chartOptions() {
            return {
                chart: {
                    id: `chart-${this.type}`,
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                    background: 'transparent',
                    foreColor: 'var(--chart-text)',
                },

                colors: ['var(--chart-primary)'],

                labels: this.type === 'radialBar' ? ['Прогресс'] : [],

                grid: {
                    borderColor: 'var(--chart-grid)',
                    strokeDashArray: 4,
                },

                stroke: {
                    curve: 'smooth',
                    width: this.type === 'radialBar' ? 0 : 3,
                    colors: ['var(--chart-primary)'],
                },

                fill: {
                    type: this.type === 'radialBar' ? 'gradient' : 'solid',
                    colors: ['var(--chart-primary)'],
                    gradient: {
                        shade: 'light',
                        type: 'horizontal',
                        shadeIntensity: 0.4,
                        gradientToColors: ['var(--chart-accent)'],
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100],
                    },
                },

                markers: {
                    size: this.type === 'line' ? 4 : 0,
                    colors: ['var(--chart-accent)'],
                    strokeColors: 'var(--chart-thumb-border)',
                    strokeWidth: 1,
                    hover: {
                        size: 6,
                    },
                },

                plotOptions: {
                    bar: {
                        borderRadius: 6,
                        columnWidth: '45%',
                    },
                    radialBar: {
                        hollow: {
                            size: '58%',
                        },
                        track: {
                            background: 'var(--chart-track)',
                        },
                        dataLabels: {
                            name: {
                                color: 'var(--chart-text)',
                                fontSize: '14px',
                            },
                            value: {
                                color: 'var(--chart-text)',
                                fontSize: '22px',
                                fontWeight: 600,
                            },
                        },
                    },
                },

                dataLabels: {
                    enabled: false,
                },

                xaxis: {
                    categories: this.type === 'radialBar'
                        ? []
                        : [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                    labels: {
                        style: {
                            colors: 'var(--chart-muted-text)',
                        },
                    },
                    axisBorder: {
                        color: 'var(--chart-grid)',
                    },
                    axisTicks: {
                        color: 'var(--chart-grid)',
                    },
                },

                yaxis: {
                    show: this.type !== 'radialBar',
                    labels: {
                        style: {
                            colors: 'var(--chart-muted-text)',
                        },
                    },
                },

                tooltip: {
                    theme: 'dark',
                },

                legend: {
                    show: false,
                },
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.chart {
    width: 100%;
    min-width: 0;
}
</style>