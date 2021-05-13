export default class ColumnChart {
  constructor(props = {}) {
    this.props = props;
    this.chartHeight = props.chartHeight || 50;
    this.render();
  }

  renderLink() {
    const { link } = this.props;

    if (!link) {
      return '';
    }

    return `<a class="column-chart__link" href="${link}">View all</a>`;
  }

  renderData() {
    const {data} = this.props;

    if (!data || !data.length) {
      return '<img src="./charts-skeleton.svg"/>';
    }

    let result = '<div data-element="body" class="column-chart__chart">';
    const maxValue = Math.max(...data);
    const scale = this.chartHeight / maxValue;

    data.forEach(item => {
      const percent = (item / maxValue * 100).toFixed(0);
      result += `<div style="--value: ${Math.floor(item * scale)}" data-tooltip="${percent}%"></div>`;
    });

    result += '</div>';

    return result;
  }

  renderHeader() {
    const { value, formatHeading } = this.props;

    // не понял, что делать в ситуации, когда value есть, но нет data
    // картинка в svg рисует скелететон без value, в демке тоже нет value
    // @dosandk, подскажите, пожалуйста, что предполагается отображать в таком случае
    // (если есть value, но нет data, верстка едет по высоте)

    const formattedValue = formatHeading
      ? formatHeading(value)
      : value;

    return `<div data-element="header" class="column-chart__header" style="--chart-height: ${this.chartHeight}">
            ${formattedValue}
          </div>`;
  }

  update(data) {
    this.data = data;
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }

  render() {
    const { label } = this.props;
    const element = document.createElement('div');

    element.innerHTML = `<div class="column-chart column-chart_loading">
        <div class="column-chart__title">
          Total ${label}
          ${this.renderLink()}
        </div>
        <div class="column-chart__container">
           ${this.renderHeader()}
           ${this.renderData()} 
        </div>
      </div>
    `;

    this.element = element.firstElementChild;
  }
}
