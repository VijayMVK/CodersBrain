
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilter", pure: false
})
export class DataFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {        
        if (query) {
            return array.filter(row=>(row.name.toLowerCase().indexOf(query.toLowerCase()) !== -1));
        }
        else return array;
    }
}