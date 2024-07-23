export interface Ipokemon {
  pokedex_id: number;
  name: {
    fr: string;
  };
  sprites: {
    regular: string;
    shiny?: string;
    gmax?: {
      regular?: string;
      shiny?: string;
    };
  };
  types: {
    name: string;
    image: string;
  }[];
  talents: {
    name: string;
    tc: boolean;
  }[];
  stats: {
    hp: number;
    atk: number;
    def: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
  };
  evolution: {
    pre?: {
      pokedex_id?: number;
      name?: string;
      condition?: string;
    }[];
    next?: {
      pokedex_id?: number;
      name?: string;
      condition?: string;
    } | null;
    mega?: {
      orbe?: string;
      sprites?: {
        regular?: string;
        shiny?: string;
      };
    }[];
  };
}
