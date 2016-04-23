/**
 * Created by harryquigley on 22/04/2016.
 */
// index.js
var vis = require('vis');



var items = [
    {x: '2014-06-11', y: 10},
    {x: '2014-06-12', y: 25},
    {x: '2014-06-13', y: 30},
    {x: '2014-06-14', y: 10},
    {x: '2014-06-15', y: 15},
    {x: '2014-06-16', y: 30}
];

var dataset = new vis.DataSet(items);
var options = {
    start: '2014-06-10',
    end: '2014-06-18',
    width:  '500px',
    height: '552px'
};
var container = document.getElementById('visualization');
var graph2d = new vis.Graph2d(container, dataset, options);

