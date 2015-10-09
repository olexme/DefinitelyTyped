/// <reference path="ag-grid" />

checkGridOptions(<ag.grid.GridOptions>{});
checkColDef(<ag.grid.ColDef>{});

function checkGridOptions(gridOptions: ag.grid.GridOptions): void {

    gridOptions.virtualPaging = true;
    gridOptions.toolPanelSuppressPivot = true;
    gridOptions.toolPanelSuppressValues = true;
    gridOptions.rowsAlreadyGrouped = true;
    gridOptions.suppressRowClickSelection = true;
    gridOptions.suppressCellSelection = true;
    gridOptions.sortingOrder = ['asc','desc'];
    gridOptions.suppressMultiSort = true;
    gridOptions.suppressHorizontalScroll = true;
    gridOptions.unSortIcon = true;
    gridOptions.rowHeight = 0;
    gridOptions.rowBuffer = 0;
    gridOptions.enableColResize = true;
    gridOptions.enableCellExpressions = true;
    gridOptions.enableSorting = true;
    gridOptions.enableServerSideSorting = true;
    gridOptions.enableFilter = true;
    gridOptions.enableServerSideFilter = true;
    gridOptions.colWidth = 0;
    gridOptions.suppressMenuHide = true;
    gridOptions.singleClickEdit = true;
    gridOptions.debug = true;
    gridOptions.icons = {};
    gridOptions.angularCompileRows = true;
    gridOptions.angularCompileFilters = true;
    gridOptions.angularCompileHeaders = true;
    gridOptions.localeText = {};
    gridOptions.localeTextFunc = function() {}
    gridOptions.suppressScrollLag = true;
    gridOptions.groupSuppressAutoColumn = true;
    gridOptions.groupSelectsChildren = true;
    gridOptions.groupHidePivotColumns = true;
    gridOptions.groupIncludeFooter = true;
    gridOptions.groupUseEntireRow = true;
    gridOptions.groupSuppressRow = true;
    gridOptions.groupSuppressBlankHeader = true;
    gridOptions.forPrint = true;
    gridOptions.groupColumnDef = {};
    gridOptions.context = {};
    gridOptions.rowStyle = {color: 'red'};
    gridOptions.rowClass = 'green';
    gridOptions.groupDefaultExpanded = false;
    gridOptions.slaveGrids = [];
    gridOptions.rowSelection = 'single';
    gridOptions.rowDeselection = true;
    gridOptions.rowData = [];
    gridOptions.floatingTopRowData = [];
    gridOptions.floatingBottomRowData = [];
    gridOptions.showToolPanel = true;
    gridOptions.groupKeys = ['a','b']
    gridOptions.groupAggFields = ['a','b']
    gridOptions.columnDefs = [];
    gridOptions.datasource = {};
    gridOptions.pinnedColumnCount = 0;
    gridOptions.groupHeaders = true;
    gridOptions.headerHeight = 0;
    gridOptions.groupRowInnerRenderer = function(params) {};
    gridOptions.groupRowRenderer = {};
    gridOptions.isScrollLag = function() {return true;}
    gridOptions.isExternalFilterPresent = function() { return true; };
    gridOptions.doesExternalFilterPass = function(node: ag.grid.RowNode) { return false; };
    gridOptions.getRowStyle = function() {};
    gridOptions.getRowClass = function() {};
    gridOptions.headerCellRenderer = function() {};
    gridOptions.groupAggFunction = function(nodes: any[]) {};
    gridOptions.onReady = function(api: any) {};
    gridOptions.onModelUpdated = function() {};
    gridOptions.onCellClicked = function(params) {};
    gridOptions.onCellDoubleClicked = function(params) {};
    gridOptions.onCellContextMenu = function(params) {};
    gridOptions.onCellValueChanged = function(params) {};
    gridOptions.onCellFocused = function(params) {};
    gridOptions.onRowSelected = function(params) {};
    gridOptions.onSelectionChanged = function() {};
    gridOptions.onBeforeFilterChanged = function() {};
    gridOptions.onAfterFilterChanged = function() {};
    gridOptions.onFilterModified = function() {};
    gridOptions.onBeforeSortChanged = function() {};
    gridOptions.onAfterSortChanged = function() {};
    gridOptions.onVirtualRowRemoved = function(params) {};
    gridOptions.onRowClicked = function(params) {};
    gridOptions.api = null;
    gridOptions.columnApi = null;

}

function checkColDef(colDef: ag.grid.ColDef): void {

    colDef.sort = 'test';
    colDef.sortedAt = 0;
    colDef.sortingOrder ['asc','desc'];
    colDef.headerName = 'test';
    colDef.field = 'test';
    colDef.headerValueGetter = 'test';
    colDef.colId = 'test';
    colDef.hide = true;
    colDef.headerTooltip = 'test';
    colDef.valueGetter = 'test';
    colDef.headerCellRenderer = {};
    colDef.headerClass = 'test';
    colDef.width = 0;
    colDef.minWidth = 0;
    colDef.maxWidth = 0;
    colDef.cellClass = 'test';
    colDef.cellStyle = {color: 'test'};
    colDef.cellRenderer = function() {};
    colDef.floatingCellRenderer = function() {};
    colDef.aggFunc = 'test';
    colDef.comparator = function() {};
    colDef.checkboxSelection = true;
    colDef.suppressMenu = true;
    colDef.suppressSorting = true;
    colDef.unSortIcon = true;
    colDef.suppressSizeToFit = true;
    colDef.suppressResize = true;
    colDef.headerGroup = 'test';
    colDef.headerGroupShow = 'test';
    colDef.editable = true;
    colDef.newValueHandler = function() {};
    colDef.volatile = true;
    colDef.template = 'test';
    colDef.templateUrl = 'test';
    colDef.filter = 'test';
    colDef.filterParams = {}
    colDef.onCellValueChanged = function() {};
    colDef.onCellClicked = function() {};
    colDef.onCellDoubleClicked = function() {};
    colDef.onCellContextMenu = function() {};
    colDef.cellClassRules = {};
}
