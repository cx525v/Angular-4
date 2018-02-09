import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit, OnDestroy, Input,SimpleChanges,OnChanges } from '@angular/core';
import { ViewChildren, ViewChild } from '@angular/core';
import { DashboardEventsService } from '../../../services/dashboardinfo/dashboard-events.service';
import { TerminalEquipment } from '../../../models/dashboardInfo/terminalequipment.model'
import { Subscription } from 'rxjs/Subscription';
@Component({

    selector: 'dashboard-memo',
    templateUrl: './memo.component.html',
    styleUrls: ['./memo.component.css'],
    providers: [MemoService],
})
export class MemoComponent implements OnInit, OnDestroy{
    memoList: MemoList;    
    private _eventServiceSubscription: Subscription;
    constructor(private memoService: MemoService, private _dashboardEventsService: DashboardEventsService) {
        this._eventServiceSubscription = this._dashboardEventsService.terminalEquipmentChangeList$.subscribe(
            (terminal: TerminalEquipment) => {             
              ...
            });
    }

   
    public ngOnInit(): void {

    }

    public ngOnDestroy(): void {

        if (this._eventServiceSubscription) {

            this._eventServiceSubscription.unsubscribe();
            this._eventServiceSubscription = null;
        }
    }
   
}