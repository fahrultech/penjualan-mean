import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
declare var $:any;

@Component({
  selector: 'app-databarang',
  templateUrl: './databarang.component.html',
  styleUrls: ['./databarang.component.css']
})
export class DatabarangComponent implements OnInit {

  ngOnInit(): void {
    axios.get('/api/kategori').then(response => {
      console.log(response.data);
    });
    this.tambahBarang;
  }
  tambahBarang(){
    $('#modalTambahBarang').modal('show');
  }
  

  

}
