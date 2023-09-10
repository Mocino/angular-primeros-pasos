import { NgModule } from "@angular/core";
import { counterComponent } from "./components/counter/counter.components";

@NgModule({
  declarations: [
    counterComponent
  ],
  exports: [
    counterComponent
  ]
})
export class counterModule {}
