import {h, Component} from 'preact';

const typeOptions = ['all', 'forks', 'sources'];

class Filters extends Component {
  render({
    filtersParams={},
    languages,
    changeLanguage,
    changeType,
    changeNumberOfStars,
    changeUpdatedDate,
    changeHasTopics,
    changeHasOpenIssues,
  }) {
    return (
      <div class="filters">
        <div class="row">
          <p class="col-xs-4">Language:</p> 
          <select
            class="soflow col-xs-8"
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option>all</option>
            { languages &&
              languages.map((language) => {
                return (
                  <option selected={filtersParams.language == language}>
                    {language}
                  </option>
                )}
              )
            }
          </select>
        </div>
        <div class="row">
          <p class="col-xs-4">Type:</p> 
          <select
            class="soflow col-xs-8"
            onChange={(e) => changeType(e.target.value)}
          >
            {
              typeOptions.map((option) => (
                <option selected={filtersParams.type === option}>{option}</option>    
              ))
            }
          </select>
        </div>
        <div class="row">
          <p class="col-xs-4">Updated after:</p> 
          <div class="col-xs-8">
            <input
              type="date"
              class="updated-after-input"
              value={filtersParams.updatedDate}
              onChange={(e) => changeUpdatedDate(e.target.value)}
            />
          </div>
        </div>
        <div class="row">
          <p class="col-xs-4">Starred > than:</p> 
          <div class="col-xs-8">
            <input
              type="number"
              class="number-of-stars"
              value={filtersParams.numberOfStars}
              onChange={(e) => changeNumberOfStars(e.target.value)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <label>
              <input
                type="checkbox"
                name="topics"
                checked={filtersParams.hasTopics}
                onChange={(e) => changeHasTopics(e.target.value)}
              />
              Has topics
            </label>
          </div>
          <div class="col-xs-12 col-md-6">
            <label>
              <input
                type="checkbox"
                name="issues"
                checked={filtersParams.hasOpenIssues}
                onChange={(e) => changeHasOpenIssues(e.target.value)}
              />
              Has open issues
            </label>
          </div>
        </div>  
      </div>
    );
  }
}

export default Filters;
