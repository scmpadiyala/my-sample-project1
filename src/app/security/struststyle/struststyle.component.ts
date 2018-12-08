import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { CloneVisitor } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: "app-struststyle",
  templateUrl: "./struststyle.component.html",
  styleUrls: ["./struststyle.component.css"]
})
export class StruststyleComponent implements OnInit {
  imageUrl = "lavin-tech.com/images/cloud.jpg";
  safeimageUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeimageUrl = this.sanitizer.bypassSecurityTrustStyle(this.imageUrl);
    // this.color = this.sanitizer.
  }

  ngOnInit() {}
}
