let LineChart = c3.generate({
    bindto: "linechart",
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
    }
});

setTimeout(function () {
    chart.load({
        columns: [
            ['data1', 230, 190, 300, 500, 300, 400]
        ]
    });
}, 1000);

setTimeout(function () {
    chart.load({
        columns: [
            ['data3', 130, 150, 200, 300, 200, 100]
        ]
    });
}, 1500);

setTimeout(function () {
    chart.unload({
        ids: 'data1'
    });
}, 2000);




/* let ctxp = document.getElementById('piechart').getContext('2d');
let chartp = new Chart(ctxp, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['New', 'Previous'],
        datasets: [{
            label: 'New vs Previous Posts',
            backgroundColor: ['blue', 'aqua'],
            borderColor: ['white'],
            data: [5, 3]
        }]
    },

    // Configuration options go here
    options: {}
});


let ctxb = document.getElementById('barchart').getContext('2d');
let chartb = new Chart(ctxb, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Jan', 'Feb', 'Ma', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Posts',
            backgroundColor: 'rgb(51, 153, 255)',
            borderColor: 'rgb(51, 153, 255)',
            data: [0, 10, 5, 2, 20, 30, 40, 45, 30, 55, 60, 65]
        }]
    },

    // Configuration options go here
    options: {}
});


let ctxbc = document.getElementById('barchart2').getContext('2d');
let chartbc = new Chart(ctxbc, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Jan', 'Feb', 'Ma', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Users',
            backgroundColor: 'rgb(51, 153, 255)',
            borderColor: 'rgb(51, 153, 255)',
            data: [5, 3, 2, 10, 3, 2, 1, 15, 8, 5, 13, 9]
        }]
    },

    // Configuration options go here
    options: {}
});

let ctxpc = document.getElementById('piechart2').getContext('2d');
let chartpc = new Chart(ctxpc, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['New', 'Returning'],
        datasets: [{
            label: 'New vs Returning Users',
            backgroundColor: ['blue', 'aqua'],
            borderColor: ['white'],
            data: [3, 8]
        }]
    },

    // Configuration options go here
    options: {}
});



let ctxlc = document.getElementById('linechart2').getContext('2d');
let chartlc = new Chart(ctxlc, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Jan', 'Feb', 'Ma', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Total Posts',
            backgroundColor: 'rgb(51, 153, 255)',
            borderColor: 'rgb(51, 153, 255)',
            data: [5, 19, 15, 13, 30, 37, 52, 65, 50, 101, 111, 122]
        }]
    },

    // Configuration options go here
    options: {}
});
/*










