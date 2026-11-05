export const m3 = {
  missions: {
    "a2c_doctor": {
      "steps": [
        {
          "partnerTr": "Bạn bị làm sao?",
          "prompt": "Hãy nói «Tôi bị đau họng».",
          "optionsTr": [
            "Tôi bị đau họng.",
            "Tôi muốn một ly cà phê.",
            "Chúc ngủ ngon."
          ],
          "hint": "Bạn đang tả cảm giác của mình.",
          "wordTr": "đau họng"
        },
        {
          "partnerTr": "Bạn có bị dị ứng không?",
          "prompt": "Hãy nói «Có, tôi bị dị ứng».",
          "optionsTr": [
            "Giá năm euro.",
            "Có, tôi bị dị ứng.",
            "Tạm biệt."
          ],
          "hint": "Người ta hỏi về dị ứng.",
          "wordTr": "dị ứng"
        },
        {
          "partnerTr": "Bạn có cần giấy nghỉ ốm không?",
          "prompt": "Sắp xếp các từ theo thứ tự. Hãy nói «Tôi cần giấy nghỉ ốm trong ba ngày».",
          "blocksTr": [
            "1. Tôi cần",
            "2. giấy nghỉ ốm",
            "3. trong ba",
            "4. ngày"
          ],
          "pattern": "Mẫu: tôi cần + giấy nghỉ ốm + trong ba ngày. Đuôi -ksi nghĩa là «trong» một khoảng thời gian: kolme päivää thành kolmeksi päiväksi.",
          "wordTr": "nghỉ ốm"
        },
        {
          "partnerTr": "Bây giờ chúng tôi sẽ đo huyết áp cho bạn.",
          "prompt": "Hãy nói to: «Huyết áp của tôi có bình thường không?»",
          "targetTr": "Huyết áp của tôi có bình thường không?",
          "wordTr": "huyết áp"
        }
      ],
      "can": [
        "tả cảm giác của mình",
        "nói bạn bị dị ứng",
        "xin giấy nghỉ ốm vài ngày",
        "hỏi về huyết áp của bạn"
      ]
    },
    "a2c_hotel": {
      "steps": [
        {
          "partnerTr": "Chào buổi tối! Tôi có thể giúp gì?",
          "prompt": "Hãy nói «Tôi đã đặt phòng».",
          "optionsTr": [
            "Tôi đã đặt phòng.",
            "Tạm biệt.",
            "Giá ba euro."
          ],
          "hint": "Bạn đã đặt phòng rồi.",
          "wordTr": "đặt chỗ"
        },
        {
          "partnerTr": "Các bạn sẽ ở mấy đêm?",
          "prompt": "Hãy nói «Chúng tôi sẽ ở hai đêm».",
          "optionsTr": [
            "Chúc ngủ ngon.",
            "Chúng tôi sẽ ở hai đêm.",
            "Tôi muốn một ly cà phê."
          ],
          "hint": "Bạn nói mình ở bao lâu.",
          "wordTr": "ở qua đêm"
        },
        {
          "partnerTr": "Hồ bơi ở đâu?",
          "prompt": "Sắp xếp các từ theo thứ tự. Hãy nói «Hồ bơi ở tầng dưới».",
          "blocksTr": [
            "1. Hồ bơi",
            "2. ở",
            "3. tầng dưới"
          ],
          "pattern": "Mẫu: nơi chốn + ở + đâu. Đuôi -ssa nghĩa là «ở / trong»: alakerta (tầng dưới) thành alakerrassa.",
          "wordTr": "bể bơi"
        },
        {
          "partnerTr": "Bạn còn cần gì nữa không?",
          "prompt": "Hãy nói to: «Cho tôi xin một chìa khóa dự phòng được không?»",
          "targetTr": "Cho tôi xin một chìa khóa dự phòng được không?",
          "wordTr": "chìa khóa dự phòng"
        }
      ],
      "can": [
        "nói bạn đã đặt phòng",
        "nói bạn ở mấy đêm",
        "hỏi hồ bơi ở đâu",
        "xin chìa khóa dự phòng"
      ]
    },
    "a2c_directions": {
      "steps": [
        {
          "partnerTr": "Xin lỗi, hiệu thuốc gần nhất ở đâu?",
          "prompt": "Hãy nói «Nó ở ngã tư đằng kia».",
          "optionsTr": [
            "Nó ở ngã tư đằng kia.",
            "Tôi muốn một ly cà phê.",
            "Chúc ngủ ngon."
          ],
          "hint": "Bạn nói chỗ đó ở đâu.",
          "wordTr": "ở ngã tư"
        },
        {
          "partnerTr": "Nó có xa không?",
          "prompt": "Hãy nói «Không, đi bộ là tới».",
          "optionsTr": [
            "Chào buổi sáng.",
            "Không, đi bộ là tới.",
            "Giá ba euro."
          ],
          "hint": "Bạn nói là nó gần.",
          "wordTr": "đi bộ (khoảng cách)"
        },
        {
          "partnerTr": "Tôi phải đi hướng nào?",
          "prompt": "Sắp xếp các từ theo thứ tự. Hãy nói «Rẽ phải rồi đi thẳng».",
          "blocksTr": [
            "1. Rẽ",
            "2. phải",
            "3. rồi",
            "4. đi",
            "5. thẳng"
          ],
          "pattern": "Mẫu: rẽ + phải + rồi + đi + thẳng. Đây là câu mệnh lệnh: käänny (rẽ đi!), jatka (đi tiếp!).",
          "wordTr": "rẽ"
        },
        {
          "partnerTr": "Nó ở đối diện thư viện.",
          "prompt": "Hãy nói to: «Nó ở ngay góc đường phải không?»",
          "targetTr": "Nó ở ngay góc đường phải không?",
          "wordTr": "góc"
        }
      ],
      "can": [
        "hỏi chỗ gần nhất ở đâu",
        "hiểu «đi bộ là tới»",
        "bảo ai đó rẽ phải rồi đi tiếp",
        "hỏi xem có ở góc đường không"
      ]
    },
    "b1c_service": {
      "steps": [
        {
          "partnerTr": "Xin chào. Tôi có thể giúp gì?",
          "prompt": "Hãy nói «Tôi muốn đặt lịch hẹn».",
          "optionsTr": [
            "Tôi muốn đặt lịch hẹn.",
            "Tạm biệt.",
            "Giá ba euro."
          ],
          "hint": "Bạn muốn đặt lịch hẹn.",
          "wordTr": "đặt lịch hẹn"
        },
        {
          "partnerTr": "Bạn có số thứ tự không?",
          "prompt": "Hãy nói «Có, số của tôi là hai mươi ba».",
          "optionsTr": [
            "Chúc ngủ ngon.",
            "Có, số của tôi là hai mươi ba.",
            "Hôm nay trời lạnh."
          ],
          "hint": "Bạn nói số thứ tự của mình.",
          "wordTr": "số thứ tự"
        },
        {
          "partnerTr": "Bạn muốn làm gì?",
          "prompt": "Sắp xếp các từ theo thứ tự. Hãy nói «Tôi muốn nhận bưu kiện ở điểm nhận hàng».",
          "blocksTr": [
            "1. Tôi muốn",
            "2. nhận",
            "3. bưu kiện",
            "4. ở điểm nhận hàng"
          ],
          "pattern": "Mẫu: tôi muốn + nhận + bưu kiện + ở điểm nhận hàng. Đuôi -sta nghĩa là «từ»: noutopiste thành noutopisteestä.",
          "wordTr": "điểm nhận hàng"
        },
        {
          "partnerTr": "Chúng tôi còn cần tệp đính kèm.",
          "prompt": "Hãy nói to: «Tôi sẽ gửi tệp đính kèm qua email».",
          "targetTr": "Tôi sẽ gửi tệp đính kèm qua email.",
          "wordTr": "tệp đính kèm"
        }
      ],
      "can": [
        "xin đặt lịch hẹn",
        "nói số thứ tự của bạn",
        "nói bạn muốn nhận bưu kiện",
        "hứa sẽ gửi tệp đính kèm"
      ]
    },
    "b1c_work2": {
      "steps": [
        {
          "partnerTr": "Tại sao bạn ứng tuyển công việc này?",
          "prompt": "Hãy nói «Tôi ứng tuyển vì đang tìm việc ổn định».",
          "optionsTr": [
            "Tôi ứng tuyển vì đang tìm việc ổn định.",
            "Tôi muốn một ly cà phê.",
            "Chúc ngủ ngon."
          ],
          "hint": "Bạn giải thích vì sao ứng tuyển.",
          "wordTr": "dài hạn"
        },
        {
          "partnerTr": "Bạn muốn làm toàn thời gian hay bán thời gian?",
          "prompt": "Hãy nói «Làm bán thời gian sẽ hợp với tôi hơn».",
          "optionsTr": [
            "Tạm biệt.",
            "Làm bán thời gian sẽ hợp với tôi hơn.",
            "Hôm nay trời lạnh."
          ],
          "hint": "Bạn chọn giữa toàn thời gian và bán thời gian.",
          "wordTr": "bán thời gian"
        },
        {
          "partnerTr": "Bạn có giấy xác nhận làm việc không?",
          "prompt": "Sắp xếp các từ theo thứ tự. Hãy nói «Tôi có giấy xác nhận làm việc từ nơi làm trước».",
          "blocksTr": [
            "1. Tôi",
            "2. có",
            "3. giấy xác nhận làm việc",
            "4. từ nơi làm",
            "5. trước"
          ],
          "pattern": "Mẫu: tôi + có + giấy xác nhận làm việc + từ nơi làm trước. Đuôi -lta nghĩa là «từ»: työnantaja thành työnantajalta.",
          "wordTr": "giấy xác nhận công tác"
        },
        {
          "partnerTr": "Hãy nói thêm về giờ làm việc.",
          "prompt": "Hãy nói to: «Giờ làm việc mỗi tuần là bao nhiêu?»",
          "targetTr": "Giờ làm việc mỗi tuần là bao nhiêu?",
          "wordTr": "giờ làm việc"
        }
      ],
      "can": [
        "nói vì sao bạn ứng tuyển",
        "nói về việc bán thời gian",
        "nói bạn có giấy xác nhận làm việc",
        "hỏi về giờ làm việc"
      ]
    },
    "b1c_shop3": {
      "steps": [
        {
          "partnerTr": "Tôi có thể giúp gì?",
          "prompt": "Hãy nói «Tôi muốn khiếu nại về sản phẩm này».",
          "optionsTr": [
            "Tôi muốn khiếu nại về sản phẩm này.",
            "Chúc ngủ ngon.",
            "Nhà ga ở đâu?"
          ],
          "hint": "Bạn muốn khiếu nại về một sản phẩm.",
          "wordTr": "khiếu nại (hàng hóa)"
        },
        {
          "partnerTr": "Sản phẩm còn bảo hành không?",
          "prompt": "Hãy nói «Còn, bảo hành hết vào tháng sau».",
          "optionsTr": [
            "Chào buổi sáng.",
            "Còn, bảo hành hết vào tháng sau.",
            "Nó màu đỏ."
          ],
          "hint": "Bạn nói bảo hành vẫn còn.",
          "wordTr": "thời hạn bảo hành"
        },
        {
          "partnerTr": "Tại sao bạn muốn trả lại sản phẩm?",
          "prompt": "Sắp xếp các từ theo thứ tự. Hãy nói «Trong đó không có hướng dẫn sử dụng».",
          "blocksTr": [
            "1. Trong đó",
            "2. không",
            "3. có",
            "4. hướng dẫn"
          ],
          "pattern": "Mẫu: trong đó + không + có + hướng dẫn sử dụng. Trong câu phủ định, đồ vật ở dạng «một ít»: käyttöohjetta.",
          "wordTr": "hướng dẫn sử dụng"
        },
        {
          "partnerTr": "Bạn có quyền trả lại trong mười bốn ngày.",
          "prompt": "Hãy nói to: «Phí giao hàng có được hoàn lại không?»",
          "targetTr": "Phí giao hàng có được hoàn lại không?",
          "wordTr": "chi phí giao hàng"
        }
      ],
      "can": [
        "nói bạn muốn khiếu nại",
        "hỏi về thời hạn bảo hành",
        "giải thích là thiếu hướng dẫn",
        "hỏi xem phí giao hàng có được hoàn lại không"
      ]
    },
    "b2c_meeting": {
      "steps": [
        {
          "partnerTr": "Bạn đã nhận thư mời họp chưa?",
          "prompt": "Hãy nói «Rồi, tôi đã đọc chương trình họp».",
          "optionsTr": [
            "Rồi, tôi đã đọc chương trình họp.",
            "Chúc ngủ ngon.",
            "Giá ba euro."
          ],
          "hint": "Bạn nói là bạn đã đọc.",
          "wordTr": "chương trình nghị sự"
        },
        {
          "partnerTr": "Ai là chủ tọa cuộc họp?",
          "prompt": "Hãy nói «Chủ tọa là ông Virtanen».",
          "optionsTr": [
            "Tạm biệt.",
            "Chủ tọa là ông Virtanen.",
            "Hôm nay trời lạnh."
          ],
          "hint": "Bạn nêu tên chủ tọa.",
          "wordTr": "chủ tọa"
        },
        {
          "partnerTr": "Tiếp theo sẽ làm gì?",
          "prompt": "Sắp xếp các từ theo thứ tự. Hãy nói «Về đề xuất sẽ biểu quyết trước khi cuộc họp kết thúc».",
          "blocksTr": [
            "1. Về đề xuất",
            "2. sẽ biểu quyết",
            "3. trước khi",
            "4. cuộc họp",
            "5. kết thúc"
          ],
          "pattern": "Mẫu: về đề xuất + sẽ biểu quyết + trước khi + cuộc họp + kết thúc. «äänestetään» = «người ta biểu quyết» (không nói ai).",
          "wordTr": "biểu quyết"
        },
        {
          "partnerTr": "Có ai muốn nói thêm không?",
          "prompt": "Hãy nói to: «Tôi muốn ủng hộ đề xuất này».",
          "targetTr": "Tôi muốn ủng hộ đề xuất này.",
          "wordTr": "ủng hộ (đề xuất)"
        }
      ],
      "can": [
        "nói bạn đã đọc chương trình họp",
        "nêu tên chủ tọa cuộc họp",
        "hiểu là sẽ có biểu quyết",
        "nói bạn ủng hộ một đề xuất"
      ]
    },
    "b2c_housing3": {
      "steps": [
        {
          "partnerTr": "Bạn đã đọc hợp đồng thuê nhà chưa?",
          "prompt": "Hãy nói «Rồi, thời hạn báo trước là ba tháng».",
          "optionsTr": [
            "Rồi, thời hạn báo trước là ba tháng.",
            "Chúc ngủ ngon.",
            "Nó màu đỏ."
          ],
          "hint": "Bạn nói về thời hạn báo trước.",
          "wordTr": "thời hạn báo trước"
        },
        {
          "partnerTr": "Hội cư dân sắp làm gì?",
          "prompt": "Hãy nói «Hội cư dân sẽ thay đường ống».",
          "optionsTr": [
            "Tạm biệt.",
            "Hội cư dân sẽ thay đường ống.",
            "Tôi muốn một ly cà phê."
          ],
          "hint": "Bạn nói về việc thay đường ống.",
          "wordTr": "thay đường ống"
        },
        {
          "partnerTr": "Người quản lý nói gì về khoản phí?",
          "prompt": "Sắp xếp các từ theo thứ tự. Hãy nói «Ông ấy nói rằng khoản phí tăng».",
          "blocksTr": [
            "1. Ông ấy",
            "2. nói",
            "3. rằng",
            "4. khoản phí",
            "5. tăng"
          ],
          "pattern": "Mẫu: ông ấy + nói + rằng + khoản phí + tăng. Sau «että» (rằng) bắt đầu một câu mới: vastike nousee.",
          "wordTr": "phí quản lý (chung cư)"
        },
        {
          "partnerTr": "Bạn còn cần giấy tờ nào nữa không?",
          "prompt": "Hãy nói to: «Tôi cần giấy xác nhận của người quản lý».",
          "targetTr": "Tôi cần giấy xác nhận của người quản lý.",
          "wordTr": "giấy xác nhận của quản lý"
        }
      ],
      "can": [
        "nói về thời hạn báo trước",
        "nhắc đến việc thay đường ống",
        "nói về phí bảo trì",
        "xin giấy xác nhận của người quản lý"
      ]
    },
    "b2c_finance": {
      "steps": [
        {
          "partnerTr": "Tôi có thể giúp gì?",
          "prompt": "Hãy nói «Tôi muốn xin vay mua nhà».",
          "optionsTr": [
            "Tôi muốn xin vay mua nhà.",
            "Chúc ngủ ngon.",
            "Nhà ga ở đâu?"
          ],
          "hint": "Bạn muốn vay mua nhà.",
          "wordTr": "vay thế chấp mua nhà"
        },
        {
          "partnerTr": "Khoản vay có cần người bảo lãnh không?",
          "prompt": "Hãy nói «Có, ngân hàng yêu cầu bảo lãnh».",
          "optionsTr": [
            "Hôm nay trời lạnh.",
            "Có, ngân hàng yêu cầu bảo lãnh.",
            "Tạm biệt."
          ],
          "hint": "Bạn nói ngân hàng cần bảo lãnh.",
          "wordTr": "bảo lãnh"
        },
        {
          "partnerTr": "Bạn có nợ quá hạn không?",
          "prompt": "Sắp xếp các từ theo thứ tự. Hãy nói «Tôi không có nợ quá hạn».",
          "blocksTr": [
            "1. Tôi",
            "2. không",
            "3. có",
            "4. nợ quá hạn"
          ],
          "pattern": "Mẫu: tôi + không + có + nợ quá hạn. Trong câu phủ định, thứ đó ở dạng «một ít»: maksuhäiriötä.",
          "wordTr": "ghi nhận nợ quá hạn"
        },
        {
          "partnerTr": "Bạn còn câu hỏi nào không?",
          "prompt": "Hãy nói to: «Khi nào tôi nhận được tiền hoàn thuế?»",
          "targetTr": "Khi nào tôi nhận được tiền hoàn thuế?",
          "wordTr": "hoàn thuế"
        }
      ],
      "can": [
        "xin vay mua nhà",
        "nói ngân hàng yêu cầu bảo lãnh",
        "nói bạn không có nợ quá hạn",
        "hỏi về tiền hoàn thuế"
      ]
    }
  },
};
