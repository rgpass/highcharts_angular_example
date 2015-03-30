angular.module('myApp', ['highcharts-ng']);

angular.module('myApp')
.controller('barChart', function ($scope) {
  $scope.defaultStuff = function() {
    $scope.chartConfig.title.text = 'Default!';
    $scope.chartConfig.series = [{data: [10, 15, 12, 8, 7]}];
  }

  $scope.sweetTitle = function() {
    $scope.chartConfig.title.text = 'Sweet!';
    $scope.chartConfig.series = [{data: [1, 2, 3, 8, 10]}];
  };

  $scope.dudeTitle = function() {
    $scope.chartConfig.title.text = 'Dude!';
    $scope.chartConfig.series = [{data: [10, 15, 45, 20, 4]}];
  };

  $scope.chartConfig = {

    options: {
        //This is the Main Highcharts chart config. Any Highchart options are valid here.
        //will be overriden by values specified below.
        chart: {
          type: 'bar'
        },
        tooltip: {
          style: {
            padding: 10,
            fontWeight: 'bold'
          }
        }
    },
    //The below properties are watched separately for changes.

    //Series object (optional) - a list of series using normal highcharts series options.
    series: [{
       data: [10, 15, 12, 8, 7]
    }],
    //Title configuration (optional)
    title: {
      text: 'The Coolest'
    },
    //Boolean to control showng loading status on chart (optional)
    //Could be a string if you want to show specific loading text.
    loading: false,
    //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
    //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
    xAxis: {
      currentMin: 0,
      currentMax: 6,
      title: {text: 'values'}
    },
    //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
    useHighStocks: false,
    //size (optional) if left out the chart will default to size of the div or something sensible.
    size: {
     width: 400,
     height: 300
    }//,
    // //function (optional)
    // func: function (chart) {
    //  //setup some logic for the chart
    // }
  };
});