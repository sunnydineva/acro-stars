// Public documents data for Acro Stars website
// This file can be easily edited to add, remove, or modify documents

export interface PublicDocument {
  id: string;
  title: string;
  description?: string;
  date: string;
  type: 'board-decision' | 'protocol' | 'other';
  url: string;
}

// Document type labels in Bulgarian
export const documentTypeLabels = {
  'board-decision': 'Решение на УС',
  'protocol': 'Протокол',
  'other': 'Друг документ'
};

// Sample documents data
export const publicDocuments: PublicDocument[] = [
  {
    id: 'doc-001',
    title: 'Решение на УС относно състезателен календар 2024',
    description: 'Утвърждаване на състезателния календар за 2024 година и определяне на приоритетните състезания.',
    date: '2024-01-15',
    type: 'board-decision',
    url: '/documents/decision-001-2024.pdf'
  },
  {
    id: 'doc-002',
    title: 'Протокол от Общо събрание',
    description: 'Протокол от редовно Общо събрание на КСА "Акро Старс" - Варна, проведено на 20.02.2024 г.',
    date: '2024-02-20',
    type: 'protocol',
    url: '/documents/protocol-002-2024.pdf'
  },
  {
    id: 'doc-003',
    title: 'Решение на УС относно членски внос',
    description: 'Определяне на размера на членския внос за 2024 година.',
    date: '2024-01-15',
    type: 'board-decision',
    url: '/documents/decision-003-2024.pdf'
  },
  {
    id: 'doc-004',
    title: 'Протокол от заседание на УС',
    description: 'Протокол от заседание на Управителния съвет, проведено на 10.03.2024 г.',
    date: '2024-03-10',
    type: 'protocol',
    url: '/documents/protocol-004-2024.pdf'
  },
  {
    id: 'doc-005',
    title: 'Годишен финансов отчет за 2023',
    description: 'Годишен финансов отчет на КСА "Акро Старс" - Варна за 2023 година.',
    date: '2024-03-25',
    type: 'other',
    url: '/documents/financial-report-2023.pdf'
  },
  {
    id: 'doc-006',
    title: 'Решение на УС относно треньорски състав',
    description: 'Утвърждаване на треньорския състав за спортно-състезателната 2024 година.',
    date: '2024-01-15',
    type: 'board-decision',
    url: '/documents/decision-006-2024.pdf'
  },
  {
    id: 'doc-007',
    title: 'Протокол от извънредно Общо събрание',
    description: 'Протокол от извънредно Общо събрание на КСА "Акро Старс" - Варна, проведено на 15.04.2024 г.',
    date: '2024-04-15',
    type: 'protocol',
    url: '/documents/protocol-007-2024.pdf'
  },
  {
    id: 'doc-008',
    title: 'Спортно-технически правилник',
    description: 'Спортно-технически правилник на КСА "Акро Старс" - Варна за 2024 година.',
    date: '2024-01-20',
    type: 'other',
    url: '/documents/technical-rules-2024.pdf'
  }
];

// Function to group documents by type
export const getDocumentsByType = () => {
  const grouped: Record<string, PublicDocument[]> = {
    'board-decision': [],
    'protocol': [],
    'other': []
  };

  publicDocuments.forEach(doc => {
    grouped[doc.type].push(doc);
  });

  return grouped;
};
