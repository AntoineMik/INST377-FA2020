function convertRestaurantsToCategories(restaurantList) {
  // process your restaurants here!
  const list = restaurantList.reduce((collection, item, index) => {
    const findCategory = collection.find((currentItem) => currentItem.label === item.category);
    if(!findCategory)
    {
      collection.push(
        {
          label: item.category,
          y = 1
        }
      );
    } 
    else
    {
      findCategory.y += 1;
    }

    return collection;
  },[]);
  return list;
}

function makeYourOptionsObject(datapointsFromRestaurantsList) {
  // set your chart configuration here!
  CanvasJS.addColorSet('customColorSet1', [
    // add an array of colors here https://canvasjs.com/docs/charts/chart-options/colorset/
    ["0b4f6c","823200","9b3d12","01baef","c1df1f"]
  ]);

  return {
    animationEnabled: true,
    colorSet: 'customColorSet1',
    title: {
      text: "Places to eat out in future"
    },
    axisX: {
      interval: 1,
      labelFontSize: 12
    },
    axisY2: {
      interlacedColor: 'rgba(1,77,101,.2)',
      gridColor: 'rgba(1,77,101,.1)',
      title: 'Category of Restaurants',
      labelFontSize: 12,
      scaleBreaks: {customBreaks: [
        {
          startValue: 40,
	        endValue: 50,
	        color: "blue",
	        type: "waved"
        },
        {
          startValue: 85,
	        endValue: 100,
	        color: "blue",
	        type: "waved"
        },
        {
          startValue: 140,
	        endValue: 175,
	        color: "blue",
	        type: "waved"
        }
      ]}, // Add your scale breaks here https://canvasjs.com/docs/charts/chart-options/axisy/scale-breaks/custom-breaks/
    },
    data: [{
      type: 'bar',
      name: 'restaurants',
      axisYType: 'secondary',
      dataPoints: datapointsFromRestaurantsList
    }]
  };
}

function runThisWithResultsFromServer(jsonFromServer) {
  console.log('jsonFromServer', jsonFromServer);
  sessionStorage.setItem('restaurantList', JSON.stringify(jsonFromServer)); // don't mess with this, we need it to provide unit testing support
  // Process your restaurants list
  // Make a configuration object for your chart
  // Instantiate your chart
  const reorganizedData = convertRestaurantsToCategories(jsonFromServer);
  const options = makeYourOptionsObject(reorganizedData);
  const chart = new CanvasJS.Chart('chartContainer', options);
  chart.render();
}

// Leave lines 52-67 alone; do your work in the functions above
document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray();
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((jsonFromServer) => runThisWithResultsFromServer(jsonFromServer))
    .catch((err) => {
      console.log(err);
    });
});