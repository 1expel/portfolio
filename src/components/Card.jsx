import { v4 as uuidv4 } from 'uuid';

function Card({title, subtitles, contents, link}) {

  const subtitleArr = subtitles.map((subtitle, i) => {
    return (
      <h6 key={uuidv4()} className="mt-2">
        {subtitle}
      </h6>
    );
  });

  // contents is a 2D array. as some content parts need to have multiple li tags under 1 subtitle
  const contentArr = contents.map((content, i) => {
    if(content.length > 1) {
      // returns an array of p tags to content Arr that will all be put under 1 subtitle
      return (
        <ul key={uuidv4()}>
          {content.map(x => {
          return (
            <li key={uuidv4()} className="mt-1">
              {x}
            </li>
          )
          })}
        </ul>
      )
    } else {
      return (
        <ul key={uuidv4()}>
          <li key={uuidv4()} className="mt-1">
            {content}
          </li>
        </ul>
      );
    }

  });

  const sectionArr = [];

  for(let i = 0; i < contentArr.length; i++) {
    sectionArr.push(subtitleArr[i]);
    sectionArr.push(contentArr[i]);
  }

  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <h5>
        {title}
      </h5>
      <div>
        {sectionArr}
      </div>
      <a className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-700" href={link}>
        Git Repo
        <svg className="w-2.5 h-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </a>
    </div>
  );
}

export default Card;
