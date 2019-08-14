import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Product } from '../product';


@Component({
  selector: 'app-map-api',
  templateUrl: './map-api.component.html',
  styleUrls: ['./map-api.component.css']
})
export class MapApiComponent {
  // google maps zoom level
  zoom: number = 8;
  products: Product[]
  
  // initial center position for the map

  //customers location
  lat: number = 56.3434;
  lng: number = -1.42323;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  //product location
  markers: marker[] = [
	  {
		  lat: 52.644477,
		  lng: -1.074219,
		  label: 'A',
		  draggable: false
	  },
	  // {
		//   lat: 51.373858,
		//   lng: 7.215982,
		//   label: 'B',
		//   draggable: false
	  // },
	  // {
		//   lat: 51.723858,
		//   lng: 7.895982,
		//   label: 'C',
		//   draggable: false
	  // }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
