dayOfWeek = () => {
    let day;
    switch (new Date().getDay()) {
      case 0:
        return day = "Sunday";
        break;
      case 1:
        return day = "Monday";
        break;
      case 2:
        return day = "Tuesday";
        break;
      case 3:
        return day = "Wednesday";
        break;
      case 4:
        return day = "Thursday";
        break;
      case 5:
        return day = "Friday";
        break;
      case  6:
        return day = "Saturday";
    }
  }
  
console.log(dayOfWeek())
  