// Initialize all charts when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Chart colors
    const colors = {
        primary: '#0d6efd',
        success: '#198754',
        warning: '#ffc107',
        danger: '#dc3545',
        info: '#0dcaf0',
        purple: '#6f42c1',
        teal: '#20c997',
        indigo: '#6610f2',
        orange: '#fd7e14',
        pink: '#d63384',
        gray: '#6c757d',
        deep: '#06367c'
    };

    // 1. Content Distribution Chart
    const contentDistributionCtx = document.getElementById('contentDistributionChart').getContext('2d');
    new Chart(contentDistributionCtx, {
        type: 'pie',
        data: {
            labels: ['Projects', 'Achievements', 'Writings'],
            datasets: [{
                data: [4, 2, 2],
                backgroundColor: [
                    colors.primary,
                    colors.success,
                    colors.info
                ],
                borderWidth: 2,
                borderColor: '#fff',
                hoverOffset: 15
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = 8; // 4+2+2
                            const percentage = ((context.raw/total)*100).toFixed(1);
                            return `${context.label}: ${context.raw} items (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });

    // 2. Writings Analytics Chart
    const writingsCtx = document.getElementById('writingsChart').getContext('2d');
    new Chart(writingsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Science', 'Islamic', 'Technology'],
            datasets: [{
                data: [1, 1, 0],
                backgroundColor: [
                    colors.info,
                    colors.indigo,
                    colors.primary
                ],
                borderWidth: 2,
                borderColor: '#fff',
                hoverOffset: 15
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '50%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw} article${context.raw !== 1 ? 's' : ''}`;
                        }
                    }
                }
            }
        }
    });

    // 3. Project Categories Pie Chart
    const projectCategoriesCtx = document.getElementById('projectCategoriesChart').getContext('2d');
    new Chart(projectCategoriesCtx, {
        type: 'pie',
        data: {
            labels: ['Web Development', 'JavaScript', 'Tools', 'Design'],
            datasets: [{
                data: [1, 1, 1, 1],
                backgroundColor: [
                    colors.success,
                    colors.warning,
                    colors.info,
                    colors.danger
                ],
                borderWidth: 2,
                borderColor: '#fff',
                hoverOffset: 15
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw} project (${(context.raw/4*100).toFixed(0)}%)`;
                        }
                    }
                }
            }
        }
    });

    // 4. Project Status Donut Chart
    const projectStatusCtx = document.getElementById('projectStatusChart').getContext('2d');
    new Chart(projectStatusCtx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'In Progress'],
            datasets: [{
                data: [3, 1],
                backgroundColor: [
                    colors.success,
                    colors.warning
                ],
                borderWidth: 2,
                borderColor: '#fff',
                hoverOffset: 15
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw} project (${(context.raw/4*100).toFixed(0)}%)`;
                        }
                    }
                }
            }
        }
    });

    // 5. Monthly Distribution Bar Chart
    const monthlyDistributionCtx = document.getElementById('monthlyDistributionChart').getContext('2d');
    new Chart(monthlyDistributionCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Projects Completed',
                data: [0, 0, 0, 0, 0, 1, 2, 1, 3, 0, 0, 0],
                backgroundColor: [
                    colors.primary,
                    colors.success,
                    colors.warning,
                    colors.info,
                    colors.danger,
                    colors.purple,
                    colors.teal,
                    colors.indigo,
                    colors.orange,
                    colors.pink,
                    colors.gray,
                    colors.deep
                ],
                borderRadius: 5,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Projects: ${context.raw}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });

    // 6. Technology Usage Polar Chart
    const technologyUsageCtx = document.getElementById('technologyUsageChart').getContext('2d');
    new Chart(technologyUsageCtx, {
        type: 'polarArea',
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'API'],
            datasets: [{
                data: [4, 3, 4, 1, 1, 1],
                backgroundColor: [
                    colors.orange,
                    colors.primary,
                    colors.warning,
                    colors.indigo,
                    colors.info,
                    colors.success
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw} projects`;
                        }
                    }
                }
            }
        }
    });

    // 7. Achievement Levels Radar Chart
    const achievementLevelsCtx = document.getElementById('achievementLevelsChart').getContext('2d');
    new Chart(achievementLevelsCtx, {
        type: 'radar',
        data: {
            labels: ['National Level', 'Divisional Level', 'Science', 'Programming', 'Team', 'Individual'],
            datasets: [{
                label: 'Achievement Metrics',
                data: [1, 1, 1, 1, 1, 1],
                backgroundColor: 'rgba(13, 110, 253, 0.25)',
                borderColor: colors.primary,
                pointBackgroundColor: colors.primary,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: colors.primary,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animations: {
                tension: {
                    duration: 1500,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 2,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw} achievement`;
                        }
                    }
                }
            }
        }
    });

    // 8. Project Timeline Chart
    const projectTimelineCtx = document.getElementById('projectTimelineChart').getContext('2d');
    new Chart(projectTimelineCtx, {
        type: 'line',
        data: {
            labels: ['2023', '2024', 'July 2025', 'August 2025', 'September 2025'],
            datasets: [{
                label: 'Content Timeline',
                data: [1, 4, 5, 7, 8],
                borderColor: colors.success,
                backgroundColor: 'rgba(25, 135, 84, 0.25)',
                tension: 0.3,
                fill: true,
                pointBackgroundColor: colors.success,
                pointBorderColor: '#fff',
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Total Content: ${context.raw}`;
                        }
                    }
                }
            },
            animations: {
                tension: {
                    duration: 1500,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
});
