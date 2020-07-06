import dtsGenerator, { DefaultTypeNameConvertor, SchemaId } from 'dtsgenerator';
import * as fs from 'fs';
import yaml from 'js-yaml';

const fileConfigs: { inputFile: string; outputFile: string }[] = [
  {
    inputFile: './docs/openapi/jellyBeansApi.yaml',
    outputFile: './docs/openapi/generatedTypes/jellyBeansApi.d.ts',
  },
];

function typeNameConvertor(id: SchemaId): string[] {
  const names = DefaultTypeNameConvertor(id);
  if (names.length > 0) {
    const lastIndex = names.length - 1;
    names[lastIndex] = 'I' + names[lastIndex];
  }
  return names;
}

async function main(): Promise<void> {
  const logger = console;
  logger.log('\n\n 👉 -> Generating TypeScript interfaces from OpenAPI...');

  fileConfigs.forEach(async config => {
    logger.log(`\n 💪 -> Generating TypeScript interfaces for ${config.inputFile}`);

    const content = yaml.safeLoad(fs.readFileSync(config.inputFile, 'utf-8'));
    let result = await dtsGenerator({
      contents: [content],
      typeNameConvertor,
    });
    result = result.replace('declare', '');
    result = result.replace(new RegExp('namespace ', 'g'), 'export namespace ');

    fs.writeFileSync(config.outputFile, result);
    logger.log(
      `\n ✅ -> TypeScript interfaces for ${config.inputFile} written to ${config.outputFile}`
    );
  });
}

main();
