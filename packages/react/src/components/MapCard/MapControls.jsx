import React from 'react';
import { Layers16, CaretSortDown16 } from '@carbon/icons-react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { settings } from '../../constants/Settings';
import { Button } from '../../index';
import { MapControlPropType } from '../../constants/CardPropTypes';

import ScrollingControls from './ScrollingControls';

const { iotPrefix } = settings;
const BASE_CLASS_NAME = `${iotPrefix}--map-controls`;

const propTypes = {
  /** list of map control buttons */
  controls: PropTypes.arrayOf(MapControlPropType),
  /** list of layered map control buttons that are expanded horizontally */
  layeredControls: PropTypes.arrayOf(MapControlPropType),
  i18n: PropTypes.shape({
    layerTriggerIconDescription: PropTypes.string,
    scrollUp: PropTypes.string,
    scrollDown: PropTypes.string,
  }),
  /** true if the map controls are in an expanded card */
  isExpandedMode: PropTypes.bool,
  testId: PropTypes.string,
  /** position of the control buttons tooltip */
  tooltipPosition: PropTypes.oneOf(['left', 'top', 'bottom', 'right']),
};
const defaultProps = {
  controls: [],
  layeredControls: [],
  i18n: {
    layerTriggerIconDescription: 'Layered controls',
    scrollUp: 'Scroll up',
    scrollDown: 'Scroll down',
  },
  isExpandedMode: false,
  testId: 'map-controls',
  tooltipPosition: 'left',
};

const MapControls = ({
  layeredControls,
  controls,
  tooltipPosition,
  isExpandedMode,
  i18n,
  testId,
}) => {
  const { layerTriggerIconDescription, scrollUp, scrollDown } = i18n;
  const [layersOpen, setLayersOpen] = React.useState(false);
  const handleLayerClick = () => {
    setLayersOpen((openState) => !openState);
  };

  const buttonSize = isExpandedMode ? 'field' : 'small';

  const renderControl = (control, index) => {
    if (control.group) {
      const groupClass = `${BASE_CLASS_NAME}-btn-group`;
      const groupKey = `btn-group-${index}`;
      return control.hasScroll ? (
        isExpandedMode ? (
          <ScrollingControls
            testId={`${testId}-scroll-controls`}
            key={groupKey}
            controls={control.group}
            classname={groupClass}
            scrollUpIconDescriptionText={scrollUp}
            scrollDownIconDescriptionText={scrollDown}
            tooltipPosition={tooltipPosition}
            visibleItemsCount={control.visibleItemsCount}
          />
        ) : null
      ) : (
        <div key={groupKey} className={groupClass}>
          {control.group.map((groupedControl, myIndex) => {
            return (
              <Button
                key={`${groupedControl.iconDescription}-${myIndex}`}
                className={`${BASE_CLASS_NAME}-btn`}
                kind={groupedControl.kind ?? 'ghost'}
                size={buttonSize}
                selected={groupedControl.selected}
                hasIconOnly
                tooltipPosition={tooltipPosition}
                renderIcon={groupedControl.icon}
                iconDescription={groupedControl.iconDescription}
                onClick={groupedControl.onClick}
              />
            );
          })}
        </div>
      );
    }
    return (
      <Button
        key={`${control.iconDescription}-${index}`}
        className={`${BASE_CLASS_NAME}-btn`}
        kind={control.kind ?? 'ghost'}
        size={buttonSize}
        selected={control.selected}
        hasIconOnly
        tooltipPosition={tooltipPosition}
        renderIcon={control.icon}
        iconDescription={control.iconDescription}
        onClick={control.onClick}
      />
    );
  };

  const renderLayers = (control, index) => (
    <Button
      key={`${control.iconDescription}-${index}`}
      className={`${BASE_CLASS_NAME}-layers-btn`}
      kind={control.kind ?? 'ghost'}
      size={buttonSize}
      selected={control.selected}
      hasIconOnly
      tooltipPosition={tooltipPosition}
      renderIcon={control.icon}
      iconDescription={control.iconDescription}
      onClick={control.onClick}
      tabIndex={layersOpen ? 0 : -1}
    />
  );

  return (
    <div
      data-testid={testId}
      className={classnames(`${BASE_CLASS_NAME}-container`, {
        [`${BASE_CLASS_NAME}-container__has-layers`]: layeredControls,
      })}
    >
      {layeredControls && (
        <div
          className={classnames(`${BASE_CLASS_NAME}-layers`, {
            [`${BASE_CLASS_NAME}-layers__open`]: layersOpen,
          })}
        >
          <Button
            className={`${BASE_CLASS_NAME}-layers-trigger`}
            kind="ghost"
            size={buttonSize}
            hasIconOnly
            tooltipPosition={tooltipPosition}
            renderIcon={Layers16}
            iconDescription={layerTriggerIconDescription}
            onClick={handleLayerClick}
          >
            <CaretSortDown16 className={`${BASE_CLASS_NAME}-layers-trigger__caret`} />
          </Button>
          <div className={`${BASE_CLASS_NAME}-layers-wrapper`}>
            {layeredControls.map(renderLayers)}
          </div>
        </div>
      )}
      {controls.map(renderControl)}
    </div>
  );
};

MapControls.propTypes = propTypes;
MapControls.defaultProps = defaultProps;
export default MapControls;
