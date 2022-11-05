const stakeholder_template = {
  tiles: [
    {
      id: 3, // Milieu
      csr_ids: [8, 2]
    },
    {
      id: 4, // Sociaal
      csr_ids: []
    }
  ],
  layout: {
    wide: {
      areas: '"c3 c3 . ." "c3 c3 c4 ."',
      rowCount: 4
    },
    narrow: {
      areas: '"c3 c3" "c3 c3" "c4 ."',
      rowCount: 2
    }
  }
};

const director_template = {
  tiles: [
    {
      id: 1, // Energie
      csr_ids: []
    },
    {
      id: 2, // Economie
      csr_ids: []
    },
    {
      id: 4, // Sociaal
      csr_ids: []
    }
  ],
  layout: {
    wide: {
      areas: '"c1 c1 c4 c4" "c2 c2 c4 c4"',
      rowCount: 4
    },
    narrow: {
      areas: '"c1 c2" "c3 c3" "c3 c3" "c4 c4"',
      rowCount: 2
    }
  }
};

const management_template = {
  tiles: [
    {
      id: 1, // Energie
      csr_ids: [8, 2, null, 3]
    },
    {
      id: 2, // Economie
      csr_ids: []
    },
    {
      id: 3, // Milieu
      csr_ids: []
    }
  ],
  layout: {
    wide: {
      areas: '"c3 c3 c3 c3" "c3 c3 c3 c3" "c1 c1 c2 c2"',
      rowCount: 4
    },
    narrow: {
      areas: '"c3 c3" "c3 c3" "c3 c3" "c1 c1" "c2 c2"',
      rowCount: 2
    }
  }
};

const coordinator_template = {
  tiles: [
    {
      id: 1, // Energie
      csr_ids: [8, 2]
    },
    {
      id: 2, // Economie
      csr_ids: []
    },
    {
      id: 3, // Milieu
      csr_ids: []
    },
    {
      id: 4, // Sociaal
      csr_ids: [1]
    }
  ],
  layout: {
    wide: {
      areas: '"c1 c2 c3 c3" "c4 c4 c3 c3"',
      rowCount: 4
    },
    narrow: {
      areas: '"c1 c2" "c3 c3" "c3 c3" "c4 c4"',
      rowCount: 2
    }
  }
};

module.exports = {
  stakeholder_template,
  director_template,
  management_template,
  coordinator_template
};
