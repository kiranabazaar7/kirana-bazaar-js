/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

import React from 'react';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange';
import Text from 'terra-text';
import Heading from 'terra-heading';
import { Container } from 'react-bootstrap';
import Grid from 'terra-grid';
import Image from 'terra-image';
import Spacer from 'terra-spacer';
import SearchField from 'terra-search-field';

import styles from './StoreHeader.scss';
import rfImage from '../../images/rf-logo.png';

const cx = classNames.bind(styles);

class StoreHeader extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.resizeHeaderOnScroll, true);
  }

  resizeHeaderOnScroll = () => {
    // Required for animation
    // const container = document.querySelector('[data-store-heading]');
    // this.setState({ visible: container.offsetTop !== event.target.scrollTop });
  };

  render() {
    return (
      <Spacer data-store-heading className={cx('header-container')} paddingTop="large+2" paddingBottom="large+2">
        <Container style={{ maxWidth: '80rem' }}>
          <Arrange
            className={cx('header-container')}
            alignFitStart="center"
            fitStart={<Image src={rfImage} alt="default image" className={cx('header-image')} variant="rounded" />}
            fill={
              <Spacer paddingLeft="large+3">
                <Grid>
                  <Grid.Row>
                    <Grid.Column>
                      <Heading level={3} size="large" weight={400} className={cx('header-title')}>
                        Reliance Fresh
                      </Heading>
                      <Text weight={400} className={cx('header-location')}>
                        Regimental Bazaar, Begumpet
                      </Text>
                      <Spacer>
                        <SearchField className={cx('header-search')} placeholder="Search the Item" />
                      </Spacer>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Spacer>
            }
          />
        </Container>
      </Spacer>
    );
  }
}

export default StoreHeader;
