import type { TileItem, PaletteTile } from '@/types';
export const GRID_SIZE = 7;
export const FREE_SHIPPING_THRESHOLD = 500;
export const SHIPPING_COST = 25;
export const INITIAL_TILES: TileItem[] = [
  {
    id: 'ocean-wave',
    name: 'Ocean Wave',
    price: 28.0,
    quantity: 150,
    imageSrc: '/shop/tiles/ocean-wave.svg',
    thumbnailSrc: '/shop/tiles/ocean-wave-thumb.svg',
    patternColor: '#3B6B9E',
  },
  {
    id: 'forest-fern',
    name: 'Forest Fern',
    price: 30.0,
    quantity: 75,
    imageSrc: '/shop/tiles/forest-fern.svg',
    thumbnailSrc: '/shop/tiles/forest-fern-thumb.svg',
    patternColor: '#4A7C59',
  },
  {
    id: 'terracotta-dot',
    name: 'Terracotta Dot',
    price: 26.0,
    quantity: 200,
    imageSrc: '/shop/tiles/terracotta-dot.svg',
    thumbnailSrc: '/shop/tiles/terracotta-dot-thumb.svg',
    patternColor: '#C4724E',
  },
  {
    id: 'yellow-star',
    name: 'Yellow Star',
    price: 29.0,
    quantity: 50,
    imageSrc: '/shop/tiles/yellow-star.svg',
    thumbnailSrc: '/shop/tiles/yellow-star-thumb.svg',
    patternColor: '#D4A843',
  },
];
export const EXTRA_TILES: TileItem[] = [
  {
    id: 'azure-mosaic',
    name: 'Azure Mosaic',
    price: 32.0,
    quantity: 0,
    imageSrc: '/shop/tiles/azure-mosaic.svg',
    thumbnailSrc: '/shop/tiles/azure-mosaic-thumb.svg',
    patternColor: '#2C5F8A',
  },
  {
    id: 'coral-bloom',
    name: 'Coral Bloom',
    price: 27.0,
    quantity: 0,
    imageSrc: '/shop/tiles/coral-bloom.svg',
    thumbnailSrc: '/shop/tiles/coral-bloom-thumb.svg',
    patternColor: '#D4724E',
  },
];
export const PALETTE_TILES: PaletteTile[] = [
  { id: 'ocean-wave', name: 'Ocean Wave', imageSrc: '/shop/tiles/ocean-wave.svg' },
  { id: 'forest-fern', name: 'Forest Fern', imageSrc: '/shop/tiles/forest-fern.svg' },
  { id: 'terracotta-dot', name: 'Terracotta Dot', imageSrc: '/shop/tiles/terracotta-dot.svg' },
  { id: 'yellow-star', name: 'Yellow Star', imageSrc: '/shop/tiles/yellow-star.svg' },
  { id: 'geo-diamond', name: 'Geo Diamond', imageSrc: '/shop/tiles/geo-diamond.svg' },
  { id: 'floral-arch', name: 'Floral Arch', imageSrc: '/shop/tiles/floral-arch.svg' },
  { id: 'moroccan-star', name: 'Moroccan Star', imageSrc: '/shop/tiles/moroccan-star.svg' },
  { id: 'azure-mosaic', name: 'Azure Mosaic', imageSrc: '/shop/tiles/azure-mosaic.svg' },
  { id: 'coral-bloom', name: 'Coral Bloom', imageSrc: '/shop/tiles/coral-bloom.svg' },
  { id: 'midnight-bird', name: 'Midnight Bird', imageSrc: '/shop/tiles/midnight-bird.svg' },
];
