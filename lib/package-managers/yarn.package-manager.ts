import * as yarnLockParser from '@yarnpkg/lockfile';
import { Runner, RunnerFactory } from '../runners';
import { YarnRunner } from '../runners/yarn.runner';
import { AbstractPackageManager } from './abstract.package-manager';
import { LockParser } from './lock-parser';
import { PackageManager } from './package-manager';
import { PackageManagerCommands } from './package-manager-commands';

export class YarnPackageManager extends AbstractPackageManager {
  constructor() {
    super(RunnerFactory.create(Runner.YARN) as YarnRunner);
  }

  public get name() {
    return PackageManager.YARN.toUpperCase();
  }

  get cli(): PackageManagerCommands {
    return {
      install: 'install',
      add: 'add',
      update: 'upgrade',
      remove: 'remove',
      saveFlag: '',
      saveDevFlag: '-D',
    };
  }

  get lockParser(): LockParser {
    return yarnLockParser;
  }
}
