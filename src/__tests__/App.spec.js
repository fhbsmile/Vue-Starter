import { createLocalVue, shallowMount, RouterLinkStub } from '@vue/test-utils';
import Router from 'vue-router';
import Vuex from 'vuex';
import I18n from 'vue-i18n';
import mockdate from 'mockdate';

import store from '~/core/store';
import router from '~/core/router';
import i18n from '~/core/i18n';
import vuetify from '~/core/vuetify';

import App from '../App';

const localVue = createLocalVue();

localVue.use(Router);
localVue.use(Vuex);
localVue.use(I18n);

describe('App', () => {
  let [wrapper] = [];

  beforeEach(() => {
    wrapper = shallowMount(App, {
      localVue,
      router,
      store,
      i18n,
      vuetify,
      stubs: {
        RouterLink: RouterLinkStub,
      },
      mocks: {
        Date: mockdate.set('2020-01-10'),
      },
    });
  });

  it('should render an initial component', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('', () => {
    jest.mock('~/shell/overview/Overview', () => ({
      name: 'Overview',
      render: h => h('div'),
    }));

    router.push('/overview');
  });

  it('', () => {
    jest.mock('~/shell/hello-world/HelloWorld', () => ({
      name: 'HelloWorld',
      render: h => h('div'),
    }));

    router.push('/hello-world');
  });

  it('', async () => {
    jest.mock('~/shell/guide/state-management/StateManagement', () => ({
      name: 'StateManagement',
      render: h => h('div'),
    }));

    router.push('/guide/state-management');
  });

  it('', () => {
    jest.mock('~/shell/crud-operations/basic/Basic', () => ({
      name: 'HelloWorld',
      render: h => h('div'),
    }));

    router.push('/crud-operations/basic');
  });
});
