import prisma from "../database/prismaClient.js";

export const createReservation = async (req, res) => {

  const {
    amenity_id,
    resident_id,
    reservation_date,
    start_time,
    end_time
  } = req.body;

  /* VERIFICAR CONFLITO */

  const conflict = await prisma.reservations.findFirst({
    where: {
      amenity_id: Number(amenity_id),
      reservation_date: new Date(reservation_date),
      AND: [
        {
          start_time: {
            lt: end_time
          }
        },
        {
          end_time: {
            gt: start_time
          }
        }
      ]
    }
  });

  if (conflict) {
    return res.status(400).json({
      error: "Este horário já está reservado."
    });
  }

  /* CRIAR RESERVA */

  const reservation = await prisma.reservations.create({
    data: {
      amenity_id: Number(amenity_id),
      resident_id: Number(resident_id),
      reservation_date: new Date(reservation_date),
      start_time,
      end_time
    }
  });

  res.json(reservation);
};

export const listReservations = async (req, res) => {

  const reservations = await prisma.reservations.findMany({
    include: {
      amenity: true,
      resident: true
    },
    orderBy: {
      reservation_date: "desc"
    }
  });

  res.json(reservations);
};