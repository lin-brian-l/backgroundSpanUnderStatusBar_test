import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page"
import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService, private page: Page) { 
        this.page = page; 
        this.page.actionBarHidden = true;
        this.page.className = "background"
        this.page.backgroundSpanUnderStatusBar = true;
        // this.page.backgroundImage = "~/images/mountain.jpeg";
    }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}