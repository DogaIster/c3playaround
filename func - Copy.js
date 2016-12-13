	<!--d3.json("https://s3.amazonaws.com/data-kinesis/data-kinesis2016/09/29/19/test_aws.json", function(data) {-->
	<!--d3.json("https://s3.amazonaws.com/data-kinesis/data-kinesis2016/09/29/19/battery_slope.json", function(data) {-->
	<!--d3.json("bower1.json", function(data) {-->
	<!--d3.csv("https://s3.amazonaws.com/data-kinesis/data-kinesis2016/09/29/19/Battery_slope1.csv", function(data) {-->
	<!--d3.json("https://s3.amazonaws.com/slope-data/slope_charged/average_slope.json", function(data) {-->
	<!--d3.csv("csv.csv", function(data) {-->
	<!--d3.json("https://s3.amazonaws.com/slope-data/slope_charged/average_slope.json", function(data) {-->
function ShowSlope() {
	d3.json("bower1.json", function(data) {
	var avgslope = c3.generate({
		bindto: '#avgslope',
		title:{ text: 'Fully charged'},
       // type: 'line',
		data: {
//		x: 'start_time',
//		xFormat: '%Y-%m-%d %H:%M:%S',
//		url: 'csv.csv',
		json: data, 
		type: 'bar',
		keys: { 
//			x: 'start_time',
			value: ['Average_slope']},
		color: function (color, d) {
            return d.value >= 10 ? "red" : "navy";
        }
		},
		tooltip: {
        format: {
            title: function (index) { return (data[index]['devid']); },
            value: function (value, ratio, id, index) {
                return (value);
				}
			}
		}
//		axis: {
//			x: {
//				type: 'timeseries',
//				 tick: {
//                format: '%Y-%m-%d %H:%M',
//rotate: 60				// how the date is displayed
//            }
//			}
//		}
	});
 });
}

function ShowUncharged() {
	d3.json("https://s3.amazonaws.com/slope-data/slope_not_charged/slope_not_chargerd.json", function(data1) {
	var chart1 = c3.generate({
		bindto: '#chart1',
		data: {
		json: data1, 
		type: 'line',
		keys: { 
			value: ['slope']},
		color: function (color, d) {
            return d.value >= 10 ? "red" : "navy";
			}
		},
		title:{ text: 'Not fully charged'},
		tooltip: {
        format: {
            title: function (index) { return (data1[index]['devid']); },
            value: function (value, ratio, id, index) {
                return (value);
				}
			}
		}
	});
 });
}