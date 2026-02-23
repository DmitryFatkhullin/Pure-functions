import 'core-js';
import { getHealthStatus } from '../health.js';

describe('getHealthStatus', () => {
  test('возвращает "healthy" для здоровья больше 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(getHealthStatus(character)).toBe('healthy');
  });

  test('возвращает "wounded" для здоровья от 15 до 50', () => {
    const char50 = { name: 'Воин', health: 50 };
    expect(getHealthStatus(char50)).toBe('wounded');
    const char30 = { name: 'Лучник', health: 30 };
    expect(getHealthStatus(char30)).toBe('wounded');
    const char15 = { name: 'Целитель', health: 15 };
    expect(getHealthStatus(char15)).toBe('wounded');
  });

  test('возвращает "critical" для здоровья меньше 15', () => {
    const char14 = { name: 'Разбойник', health: 14 };
    expect(getHealthStatus(char14)).toBe('critical');
    const char0 = { name: 'Некромант', health: 0 };
    expect(getHealthStatus(char0)).toBe('critical');
  });

  test('корректно обрабатывает граничные значения', () => {
    expect(getHealthStatus({ name: 'Тест', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Тест', health: 15 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Тест', health: 14 })).toBe('critical');
  });
});
