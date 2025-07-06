export const carTabsConfig = {
  data: {
    tabs: {
      description: 'Descripción',
      additionalInfo: 'Información Adicional',
      bidHistory: 'Historial de Pujas'
    },
    labels: {
      bidAmount: 'Monto de Puja',
      placeBid: 'Realizar Puja',
      submitBid: 'Enviar Puja'
    },
    placeholders: {
      bidAmount: 'Ingrese su puja',
      yourName: 'Su nombre',
      yourEmail: 'Su email',
      comment: 'Comentario (opcional)'
    },
    content: {
      descriptionText: 'Este vehículo cuenta con todas las características necesarias para brindar una experiencia de manejo excepcional. Ha sido cuidadosamente mantenido y se encuentra en perfectas condiciones para su próximo propietario.',
      additionalInfoText: 'Información técnica adicional sobre el vehículo, incluyendo especificaciones detalladas, historia de mantenimiento y características especiales que lo hacen único en el mercado.',
      bidHistory: [
        {
          bidder: 'Juan Pérez',
          date: '2024-01-15 14:30',
          amount: '$320,000',
          comment: 'Excelente vehículo, muy interesado.',
          avatar: '/assets/img/team/01.jpg'
        },
        {
          bidder: 'María González',
          date: '2024-01-15 15:45',
          amount: '$335,000',
          comment: 'Perfecto para lo que necesito.',
          avatar: '/assets/img/team/02.jpg'
        },
        {
          bidder: 'Carlos Rodríguez',
          date: '2024-01-15 16:20',
          amount: '$350,000',
          comment: 'Mi oferta final.',
          avatar: '/assets/img/team/03.jpg'
        },
        {
          bidder: 'Ana Martínez',
          date: '2024-01-15 17:10',
          amount: '$365,000',
          comment: 'Realmente lo quiero.',
          avatar: '/assets/img/team/04.jpg'
        },
        {
          bidder: 'Luis López',
          date: '2024-01-15 18:00',
          amount: '$380,000',
          comment: 'Última puja del día.',
          avatar: '/assets/img/team/05.jpg'
        }
      ]
    }
  }
};