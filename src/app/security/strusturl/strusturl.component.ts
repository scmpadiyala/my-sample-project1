import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-strusturl",
  templateUrl: "./strusturl.component.html",
  styleUrls: ["./strusturl.component.css"]
})
export class StrusturlComponent implements OnInit {
  dangerousUrl;
  trustedUrl;

  constructor(private sanitizer: DomSanitizer) {
    // javascript: URLs are dangerous if attacker controlled.
    // Angular sanitizes them in data binding, but you can
    // explicitly tell Angular to trust this value:
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }

  /*
   */
  ngOnInit() {}
}
