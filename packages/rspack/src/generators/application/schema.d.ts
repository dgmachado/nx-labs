export interface ApplicationGeneratorSchema {
  name: string;
  uiFramework?: 'none' | 'react' | 'web'| 'nest';
  style: 'css' | 'scss' | 'less' | 'styl';
  unitTestRunner?: 'none' | 'jest';
  e2eTestRunner?: 'none' | 'cypress';
  directory?: string;
  tags?: string[];
  rootProject?: boolean;
  monorepo?: boolean;
}

export interface NormalizedSchema extends ApplicationGeneratorSchema {
  appProjectRoot: string;
  e2eProjectName: string;
}
