import TimeSlider from "@arcgis/core/widgets/TimeSlider";

const RainfallDataFilter = new TimeSlider({
    container: "timeSlider",
    fullTimeExtent: {
      start: new Date(2016, 12, 2),
      end: new Date(2021, 8, 9)
    },
    timeExtent: {
      start: new Date(2016, 12, 2),
      end: new Date(2016, 12, 3)
    },
    stops: {
      interval: {
        value: 1,
        unit: "days"
      }
    }
  });

export default RainfallDataFilter;