import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-strustresourceurl",
  templateUrl: "./strustresourceurl.component.html",
  styleUrls: ["./strustresourceurl.component.css"]
})
export class StrustresourceurlComponent implements OnInit {
  dangerousVideoUrl;
  videoUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.dangerousVideoUrl = "https://www.youtube.com/embed/";

    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.dangerousVideoUrl
    );
  }

  ngOnInit() {}

  updateVideoUrl(id: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.dangerousVideoUrl = "https://www.youtube.com/embed/" + id;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.dangerousVideoUrl
    );
  }
}
