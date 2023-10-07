
function CardList({children, numbers, tab1, tab2, tab3}) {
  return (
    <div>

      {/* PROLL CAN FIX BY JUST PASSING IN A NEW NUMBER FOR ID. IF THEY WRITE THEIR JS RIGHT IT SHHOULD WORKLOL */}

      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
          <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm font-medium whitespace-nowrap text-gray-600 hover:text-blue-600 active" id={"tabs-with-underline-item-" + numbers[0]} data-hs-tab={"#tabs-with-underline-" + numbers[0]} aria-controls={"tabs-with-underline-" + numbers[0]} role="tab">
            {tab1}
          </button>
          <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm font-medium whitespace-nowrap text-gray-600 hover:text-blue-600" id={"tabs-with-underline-item-" + numbers[1]} data-hs-tab={"#tabs-with-underline-" + numbers[1]} aria-controls={"tabs-with-underline-" + numbers[1]} role="tab">
            {tab2}
          </button>
          {/* 
          DO NOT DELETE SO YOU CAN REFERENCE CLASS NAMES WHEN YOU NEED A THIRD CARD
          <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm font-medium whitespace-nowrap text-gray-600 hover:text-blue-600" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
            {tab3}
          </button> 
          */}
        </nav>
      </div>

      <div className="mt-3">
        <div id={"tabs-with-underline-" + numbers[0]} role="tabpanel" aria-labelledby={"tabs-with-underline-item-" + numbers[0]}>
          {children[0]}
        </div>
        <div id={"tabs-with-underline-" + numbers[1]} className="hidden" role="tabpanel" aria-labelledby={"tabs-with-underline-item-" + numbers[1]}>
          {children[1]}
        </div>
        {/* 
        DO NOT DELETE SO YOU CAN REFERENCE CLASS NAMES WHEN YOU NEED A THIRD CARD
        <div id="tabs-with-underline-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-3">
          {children[2]}
        </div> 
        */}
      </div>

    </div>
  );
}

export default CardList;
