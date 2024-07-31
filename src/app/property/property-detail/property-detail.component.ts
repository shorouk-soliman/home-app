import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public productid: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // الحصول على معرف المنتج من المعاملات
    this.productid = Number(this.route.snapshot.params['id']);
  }

  selectnexton() {
    // زيادة معرف المنتج
    this.productid += 1;
    // التنقل إلى صفحة التفاصيل التالية باستخدام المعرف المحدث
    this.router.navigate(['/property-detail', this.productid]);
  }
}
