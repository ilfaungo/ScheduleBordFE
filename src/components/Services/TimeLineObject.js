import ColorEnum from '../../Utils/ColorEnum'
import {parseDate, getWeekRange} from '../../Utils/DateUtils'
import options from '../../Utils/TimeLineChatOptions'

export const  parseTimeLineObject = (datiArray) => {
  console.log(datiArray);
  let series = [];
  let objTemp = [].concat(sort(datiArray, 'schedule'), sort(datiArray, 'task'), sort(datiArray, 'note'));
  objTemp.map(dato => {
    let obj = new ObjectTimeLine(dato.name, dato.data);
    series.push(obj);
  })
  let date =  new Object();
  date.series = series;

  date.options = options;
  return date;
};

const sort = (datiArray, type) => {
 let arrayByType = [];
 datiArray.map(dato => {
   if(dato.name === type){
    arrayByType.push(dato);
   }
  })
  return arrayByType;
}


class ObjectTimeLine{
 constructor(name, data){
   this.name = name;
   this.data = this.setData(name, data);
 }

 setData(name, data){
   let color = this.setColor(name);
    data[0].fillColor =  color
    data[0].strokeColor =  color
    return data;
 }

 setColor(name){
  switch(name) {
    case 'task':
      return ColorEnum.task;
     
    case 'schedule':
      return ColorEnum.schedule;
   
      case 'note':
        return ColorEnum.note;
     
    default:
      return ColorEnum.task;
  }
 }


}

 

