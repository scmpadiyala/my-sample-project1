import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-innerhtml",
  templateUrl: "./innerhtml.component.html",
  styleUrls: ["./innerhtml.component.css"]
})
export class InnerhtmlComponent implements OnInit {
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';

  trusetedSnippet; // = 'Template <script>alert("0wned")</script> <b>Syntax</b>';

  // trusetedSnippet;

  constructor(private sanitizer: DomSanitizer) {
    console.log("html inner : " + this.htmlSnippet);

    this.trusetedSnippet = sanitizer.bypassSecurityTrustHtml(this.htmlSnippet);
  }

  ngOnInit() {}
}
